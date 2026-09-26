'use client';

import React, { useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import {TextStyle} from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import { Extension, Node, mergeAttributes } from '@tiptap/core';

import { 
  Bold, Italic, Underline as UnderlineIcon, 
  Heading1, Heading2, Heading3, 
  List, ListOrdered, 
  AlignRight, AlignCenter, AlignLeft, 
  ImageIcon, MonitorPlay as YoutubeIcon, UploadCloud, Video
} from 'lucide-react';

// 1. declare module to extend Tiptap commands with fontSize and localVideo
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string) => ReturnType;
      unsetFontSize: () => ReturnType;
    };
    localVideo: {
      setLocalVideo: (options: { src: string }) => ReturnType;
    };
  }
}

// 2. add fontSize extension to Tiptap
const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() { return { types: ['textStyle'] } },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: element => element.style.fontSize?.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.fontSize) return {};
              return { style: `font-size: ${attributes.fontSize}` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize: (fontSize: string) => ({ chain }: any) => chain().setMark('textStyle', { fontSize }).run(),
      unsetFontSize: () => ({ chain }: any) => chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run(),
    };
  },
});

// 3. add localVideo extension to Tiptap
const LocalVideo = Node.create({
  name: 'localVideo',
  group: 'block',
  selectable: true,
  draggable: true,
  addAttributes() {
    return { src: { default: null } };
  },
  parseHTML() { return [{ tag: 'video' }] },
  renderHTML({ HTMLAttributes }) {
    return ['video', mergeAttributes(HTMLAttributes, { controls: 'true', style: 'width: 100%; border-radius: 12px; margin: 20px 0;' }), ['source', { src: HTMLAttributes.src }]];
  },
  addCommands() {
    return {
      setLocalVideo: (options: { src: string }) => ({ commands }: any) => commands.insertContent({ type: this.name, attrs: options }),
    };
  },
});

export default function Editor({ defaultValue = '' }: { defaultValue?: string }) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Heading.configure({ levels: [1, 2, 3] }),
      Underline,
      TextStyle,
      Color,
      FontFamily,
      FontSize, 
      Image.configure({ inline: true }),
      Youtube.configure({ inline: false, allowFullscreen: true }),
      LocalVideo, 
      TextAlign.configure({ types: ['heading', 'paragraph', 'image'] }),
    ],
    content: defaultValue,
    onUpdate: ({ editor }) => {
      const input = document.getElementById('content-input') as HTMLInputElement;
      if (input) input.value = editor.getHTML();
    },
  });

  if (!editor) return null;

  const addImageUrl = () => {
    const url = window.prompt('أدخلي رابط الصورة (من الإنترنت):');
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const addYoutubeVideo = () => {
    const url = window.prompt('أدخلي رابط فيديو يوتيوب:');
    if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };

  const handleLocalUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (type === 'image') {
        editor.chain().focus().setImage({ src: result }).run();
      } else {
        editor.chain().focus().setLocalVideo({ src: result }).run();
      }
    };
    reader.readAsDataURL(file);
  };

  const ToolBtn = ({ onClick, isActive, children, title }: any) => (
    <button
      type="button" title={title} onClick={onClick}
      className={`p-2 rounded-lg transition-all flex items-center justify-center ${
        isActive ? 'bg-cyan-100 text-cyan-700 shadow-sm border border-cyan-300' : 'bg-transparent text-slate-600 hover:bg-slate-200 border border-transparent'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="border border-slate-300 rounded-xl shadow-sm bg-white overflow-hidden flex flex-col">
      <div className="border-b border-slate-200 p-2 flex flex-wrap items-center gap-x-1 gap-y-2 bg-slate-50 sticky top-0 z-10">
        
        <ToolBtn title="عريض" onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}><Bold size={18} /></ToolBtn>
        <ToolBtn title="مائل" onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}><Italic size={18} /></ToolBtn>
        <ToolBtn title="تسطير" onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')}><UnderlineIcon size={18} /></ToolBtn>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>
        
        <ToolBtn title="عنوان 1" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })}><Heading1 size={18} /></ToolBtn>
        <ToolBtn title="عنوان 2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })}><Heading2 size={18} /></ToolBtn>
        <ToolBtn title="عنوان 3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })}><Heading3 size={18} /></ToolBtn>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <ToolBtn title="قائمة نقطية" onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')}><List size={18} /></ToolBtn>
        <ToolBtn title="قائمة رقمية" onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')}><ListOrdered size={18} /></ToolBtn>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <ToolBtn title="يمين" onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })}><AlignRight size={18} /></ToolBtn>
        <ToolBtn title="وسط" onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })}><AlignCenter size={18} /></ToolBtn>
        <ToolBtn title="يسار" onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })}><AlignLeft size={18} /></ToolBtn>
        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <ToolBtn title="رابط صورة" onClick={addImageUrl}><ImageIcon size={18} className="text-emerald-600" /></ToolBtn>
        <ToolBtn title="رابط فيديو" onClick={addYoutubeVideo}><YoutubeIcon size={18} className="text-red-600" /></ToolBtn>
        <ToolBtn title="رفع صورة من الجهاز" onClick={() => imageInputRef.current?.click()}><UploadCloud size={18} className="text-blue-600" /></ToolBtn>
        <ToolBtn title="رفع فيديو من الجهاز" onClick={() => videoInputRef.current?.click()}><Video size={18} className="text-purple-600" /></ToolBtn>

        <input type="file" accept="image/*" ref={imageInputRef} className="hidden" onChange={(e) => handleLocalUpload(e, 'image')} />
        <input type="file" accept="video/*" ref={videoInputRef} className="hidden" onChange={(e) => handleLocalUpload(e, 'video')} />
        <div className="w-px h-6 bg-slate-300 mx-1"></div>

        <div className="flex flex-wrap items-center gap-2 px-2 border-r border-slate-300">
          <input type="color" title="لون النص" onInput={(e: any) => editor.chain().focus().setColor(e.target.value).run()} className="w-8 h-8 p-0 border-0 rounded cursor-pointer shadow-sm" />
          
          <select title="حجم الخط" onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()} className="border border-slate-300 rounded-md text-sm py-1 px-2 bg-white focus:outline-none focus:border-cyan-500">
            <option value="">حجم الخط</option>
            <option value="12px">صغير (12px)</option>
            <option value="16px">عادي (16px)</option>
            <option value="20px">متوسط (20px)</option>
            <option value="24px">كبير (24px)</option>
            <option value="32px">ضخم (32px)</option>
            <option value="48px">عملاق (48px)</option>
          </select>

          <select title="نوع الخط" onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()} className="border border-slate-300 rounded-md text-sm py-1 px-2 bg-white focus:outline-none focus:border-cyan-500 font-sans">
            <option value="">نوع الخط</option>
            <optgroup label="خطوط عربية أساسية">
              <option value="Tahoma, sans-serif">Tahoma</option>
              <option value="'Segoe UI', sans-serif">Segoe UI</option>
              <option value="Arial, sans-serif">Arial</option>
              <option value="'Times New Roman', serif">Times New Roman</option>
            </optgroup>
            <optgroup label="خطوط إنجليزية">
              <option value="'Courier New', monospace">Courier</option>
              <option value="'Georgia', serif">Georgia</option>
              <option value="'Trebuchet MS', sans-serif">Trebuchet</option>
              <option value="Impact, sans-serif">Impact</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="p-6 bg-white flex-1 cursor-text transition-colors hover:bg-slate-50/50" onClick={() => editor.commands.focus()}>
        <EditorContent 
          editor={editor} 
          className="prose prose-slate max-w-none min-h-[500px] outline-none 
          [&_h1]:text-4xl [&_h1]:font-black [&_h1]:mb-6 
          [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-4 
          [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-3
          [&_img]:rounded-xl [&_img]:shadow-md [&_img]:max-h-[500px] [&_img]:object-contain [&_img]:mx-auto
          [&_iframe]:w-full [&_iframe]:h-[400px] [&_iframe]:rounded-xl [&_iframe]:shadow-md [&_iframe]:my-6
          [&_ul]:list-disc [&_ul]:mr-6 [&_ul]:mb-4
          [&_ol]:list-decimal [&_ol]:mr-6 [&_ol]:mb-4" 
        />
      </div>
      
      <input type="hidden" id="content-input" name="content" />
    </div>
  );
}