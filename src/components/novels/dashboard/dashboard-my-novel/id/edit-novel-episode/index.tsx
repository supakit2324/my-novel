import {useParams} from "next/navigation";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {fetchEpisodeById as fetchNovelsData, NovelEpisode} from "@/hooks/use-novels";
import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Highlight from "@tiptap/extension-highlight";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

interface UpdateEpisodeProps {
    content: Record<string, any>;
    setContent: Dispatch<SetStateAction<Record<string, any>>>;
}


const columnSetPrice = [
    {
        label: "Free",
        value: "free",
        defaultChecked: true,
    },
    {
        label: "Set Price",
        value: "set_price",
        defaultChecked: false,
    },
];

const columnSetPublish = [
    {
        label: "Publish now",
        value: "publish_now",
        defaultChecked: false,
    },
    {
        label: "Not published",
        value: "not_published",
        defaultChecked: true,
    },
    {
        label: "Set publishing time",
        value: "set_publishing_time",
        defaultChecked: false,
    },
];

const EditNovelEpisode = ({ content, setContent }: UpdateEpisodeProps) => {
    const params = useParams();
    const id = Array.isArray(params.episodeId) ? params.episodeId[0] : params.episodeId;
    const [episode, setEpisode] = useState<NovelEpisode | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [selectedPriceOption, setSelectedPriceOption] = useState<string>("free");
    const [publishOption, setPublishOption] = useState<string>("not_published");
    const [publishTime, setPublishTime] = useState<string>("");

    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Italic,
            Underline,
            Strike,
            Highlight,
            BulletList,
            OrderedList,
            ListItem,
            Image,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            FontFamily,
            TextStyle,
            Color,
        ],
        content: content.body || '',
        onUpdate: ({ editor }) => {
            const updatedContent = editor.getHTML();
            setContent((prev) => ({ ...prev, story: [updatedContent] }));
        },
    });

    useEffect(() => {
        if (editor && content.body) {
            editor.commands.setContent(content.body);
        }
    }, [editor, content.body]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNovelsData(id);
                setEpisode(data);

                if (data) {
                    setContent({
                        title: data.episodeName,
                        body: data.story,
                        priceOption: data.priceOption || "free",
                        publishOption: data.publishOption || "not_published",
                        publishTime: data.publishTime || "",
                        price: data.price || 0,
                    });
                    setSelectedPriceOption(data.priceOption || "free");
                    setPublishOption(data.publishOption || "not_published");
                    setPublishTime(data.publishTime || "");
                }
            } catch (error) {
                console.error("Error fetching episode:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, setContent]);

    if (!editor) {
        return null;
    }

    const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result as string;
                    editor.chain().focus().createParagraphNear().setImage({ src: base64Image }).run();
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handlePriceOptionChange = (value: string) => {
        setSelectedPriceOption(value);
        setContent((prev) => ({ ...prev, priceOption: value }));
    };

    const handlePublishOptionChange = (value: string) => {
        setPublishOption(value);
        setContent((prev) => ({ ...prev, publishOption: value }));
        if (value !== "set_publishing_time") {
            setPublishTime("");
        }
    };

    const handlePublishTimeChange = (value: string) => {
        setPublishTime(value);
        setContent((prev) => ({ ...prev, publishTime: value }));
    };

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="mb20">
                        <label className="heading-color ff-heading fw600 mb10">Episode Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Episode Name"
                            value={content?.title || ''}
                            onChange={(e) => setContent((prev) => ({...prev, title: e.target.value}))}
                        />
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="mb20">
                        <label className="heading-color ff-heading fw600 mb10">Episode Content</label>
                        <div className="toolbar mb-2">
                            <button
                                onClick={() => editor.chain().focus().toggleBold().run()}
                                className={`toolbar-button ${editor.isActive('bold') ? 'is-active' : ''}`}>
                                <i className="fas fa-bold"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().toggleItalic().run()}
                                className={`toolbar-button ${editor.isActive('italic') ? 'is-active' : ''}`}>
                                <i className="fas fa-italic"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().toggleUnderline().run()}
                                className={`toolbar-button ${editor.isActive('underline') ? 'is-active' : ''}`}>
                                <i className="fas fa-underline"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().toggleStrike().run()}
                                className={`toolbar-button ${editor.isActive('strike') ? 'is-active' : ''}`}>
                                <i className="fas fa-strikethrough"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().toggleHighlight().run()}
                                className={`toolbar-button ${editor.isActive('highlight') ? 'is-active' : ''}`}>
                                <i className="fas fa-highlighter"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().unsetFontFamily().run()}
                                className={`toolbar-button ${editor.isActive('highlight') ? 'is-active' : ''}`}>
                                <i className="fas fa-font"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                                className={`toolbar-button ${editor.isActive('highlight') ? 'is-active' : ''}`}>
                                <i className="fas fa-align-left"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                                className={`toolbar-button ${editor.isActive('highlight') ? 'is-active' : ''}`}>
                                <i className="fas fa-align-center"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                                className={`toolbar-button ${editor.isActive('highlight') ? 'is-active' : ''}`}>
                                <i className="fas fa-align-right"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                                className={`toolbar-button ${editor.isActive('highlight') ? 'is-active' : ''}`}>
                                <i className="fas fa-align-justify"></i>
                            </button>
                            <button
                                onClick={() => editor.chain().focus().setColor('red').run()}
                                className={`toolbar-button ${editor.isActive('highlight') ? 'is-active' : ''}`}>
                                <i className="fas fa-palette"></i>
                            </button>
                            <label className="toolbar-button">
                                <i className="fas fa-image"></i>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={addImage}
                                    style={{display: 'none'}}/>
                            </label>
                        </div>

                        <div className="editor-content" style={{minHeight: '300px'}}>
                            <EditorContent editor={editor}/>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-6">
                                <h5>Price Options</h5>
                                {columnSetPrice.map((item, index) => (
                                    <div className="checkbox-style1" key={index}>
                                        <label className="custom_checkbox">
                                            <input
                                                type="radio"
                                                name="priceOptions"
                                                checked={selectedPriceOption === item.value}
                                                onChange={() => handlePriceOptionChange(item.value)}
                                            />
                                            <span className="checkmark"/>
                                            <span>{item.label}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {selectedPriceOption === 'set_price' && (
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="mb20">
                                    <label className="heading-color ff-heading fw600 mb10">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Set the price"
                                        value={content.price || ''}
                                        onChange={(e) => setContent((prev) => ({...prev, price: e.target.value}))}/>
                                </div>
                            </div>
                        )}


                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h5>Publish Options</h5>
                                {columnSetPublish.map((item, index) => (
                                    <div className="checkbox-style1" key={index}>
                                        <label className="custom_checkbox">
                                            <input
                                                type="radio"
                                                name="publishOptions"
                                                checked={publishOption === item.value}
                                                onChange={() => handlePublishOptionChange(item.value)}
                                            />
                                            <span className="checkmark" />
                                            <span>{item.label}</span>
                                        </label>
                                    </div>
                                ))}

                                {publishOption === "set_publishing_time" && (
                                    <div className="mt-3">
                                        <label className="heading-color ff-heading fw600 mb10">Select Publish Time</label>
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            value={publishTime}
                                            onChange={(e) => handlePublishTimeChange(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditNovelEpisode