'use client';

import React, { Dispatch, SetStateAction, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

interface AddNewEpisodeProps {
    content: string;
    setContent: Dispatch<SetStateAction<string>>;
}

const AddNewEpisode = ({ content, setContent }: AddNewEpisodeProps) => {
    const quillRef = useRef<ReactQuill>(null);

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files ? input.files[0] : null;
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result;
                    if (quillRef.current && base64Image) {
                        const editor = quillRef.current.getEditor();
                        const range = editor.getSelection();
                        if (range) {
                            editor.clipboard.dangerouslyPasteHTML(range.index, `<img src="${base64Image}" alt="Uploaded Image" />`);
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        };
    };

    const modules = {
        toolbar: {
            container: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link', 'image'],
                ['clean'],
            ],
            handlers: {
                image: handleImageUpload,
            },
        },
    };

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="mb20">
                        <label className="heading-color ff-heading fw600 mb10">Episode Name</label>
                        <input type="text" className="form-control" placeholder="Your Episode Name" />
                    </div>
                    <div className="mb20">
                        <label className="heading-color ff-heading fw600 mb10">Episode Content</label>
                        <ReactQuill
                            ref={quillRef}
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            placeholder="Write your episode content here..."
                            modules={modules}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewEpisode;
