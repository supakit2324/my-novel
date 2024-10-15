"use client";
import Select, {MultiValue, SingleValue, OptionProps, StylesConfig, ActionMeta} from "react-select";
import { useState } from "react";
import {NovelTypes} from "@/enums/novel-types.enum";

type OptionType = { value: string; label: string };

type TypeOfCategoryType = {
  [key: string]: {
    male: OptionType[];
    female: OptionType[];
  } | OptionType[];
};

const NovelDescription = () => {
  const [selectedCategory, setSelectedCategory] = useState<OptionType | null>(null);
  const [selectedGender, setSelectedGender] = useState<OptionType | null>(null);
  const [typeOptions, setTypeOptions] = useState<OptionType[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<MultiValue<OptionType>>([]);
  const [selectedTag, setSelectedTag] = useState<OptionType | null>(null);
  const [categoryTagOptions, setCategoryTagOptions] = useState<OptionType[]>([]);
  const [selectedCategoryTags, setSelectedCategoryTags] = useState<OptionType[]>([])
  const [selectedLengthStory, setSelectedLengthStory] = useState<OptionType | null>(null);
  const [selectedWritingContest, setSelectedWritingContest] = useState<OptionType | null>(null);
  const [selectedGenderCategory, setSelectedGenderCategory] = useState<OptionType | null>(null);
  const [selectedContentRating, setSelectedContentRating] = useState<OptionType | null>(null);
  const [selectedBookType, setSelectedBookType] = useState<OptionType | null>(null);
  const [selectedPriceOption, setSelectedPriceOption] = useState<OptionType | null>(null);
  const [isPriceSet, setIsPriceSet] = useState<boolean>(false);

  const categoryOptions: OptionType[] = [
    { value: NovelTypes.NOVEL, label: NovelTypes.NOVEL },
    { value: NovelTypes.FANFIC, label: NovelTypes.FANFIC },
    { value: NovelTypes.EBOOK, label: NovelTypes.EBOOK },
    { value: NovelTypes.CARTOON, label: NovelTypes.CARTOON },
  ];

  const primaryGender: OptionType[] = [
    { value: "Focus on male", label: "Focus on male" },
    { value: "Focus on female", label: "Focus on female" },
  ];

  const typeOfCategory: TypeOfCategoryType = {
    novel: {
      male: [
        { value: "Urban(-Male Oriented)", label: "Urban(-Male Oriented)" },
        { value: "History(-Male Oriented)", label: "History(-Male Oriented)" },
        { value: "Fantasy(-Male Oriented)", label: "Fantasy(-Male Oriented)" },
      ],
      female: [
        { value: "Urban(-Female Oriented)", label: "Urban(-Female Oriented)" },
        { value: "History(-Female Oriented)", label: "History(-Female Oriented)" },
        { value: "Fantasy(-Female Oriented)", label: "Fantasy(-Female Oriented)" },
      ],
    },
    fanfic: [
      { value: "All Types", label: "All Types" },
      { value: "Movies", label: "Movies" },
      { value: "Video Games", label: "Video Games" },
      { value: "Anime & Comics", label: "Anime & Comics" },
    ],
  };

  const languageOptions: OptionType[] = [
    { value: "England", label: "England" },
    { value: "Thai", label: "Thai" },
    { value: "Japan", label: "Japan" },
    { value: "France", label: "France" },
    { value: "Russia", label: "Russia" },
  ];

  const tags: OptionType[] = [
    { value: "All Tags", label: "All Tags" },
    { value: "Character", label: "Character" },
    { value: "Plot", label: "Plot" },
    { value: "Setting", label: "Setting" },
  ];

  const tagsInTagSections = {
    Character: [
      { value: "eco", label: "eco" },
      { value: "genius", label: "genius" },
    ],
    Plot: [
      { value: "survival", label: "survival" },
      { value: "betrayal", label: "betrayal" },
      { value: "revenge", label: "revenge" },
    ],
    Setting: [
      { value: "magic", label: "magic" },
      { value: "r18", label: "r18" },
    ]
  }

  const lengthStoryOptions: OptionType[] = [
    { value: "novel", label: "Novel" },
    { value: "short story", label: "Short Story" },
    { value: "very short story", label: "Very Short Story" },
  ];

  const writingContestOptions: OptionType[] = [
    { value: "Viral Book Call", label: "Viral Book Call" },
    { value: "WebNaval Rising Star", label: "WebNaval Rising Star" },
  ];

  const genderCategoryOptions: OptionType[] = [
    { value: "M/M", label: "M/M" },
    { value: "F/F", label: "F/F" },
    { value: "M/F", label: "M/F" },
    { value: "other", label: "other" },
  ]

  const contentRatingOptions: OptionType[] = [
    { value: "General Audience", label: "General Audience" },
    { value: "Rated R", label: "Rated R" },
  ]

  const bookTypeOptions: OptionType[] = [
    { value: 'Single Volume Type', label: "Single Volume Type" },
    { value: 'Episode type', label: "Episode type" },
  ]

  const setPriceOptions: OptionType[] = [
    { value: 'Free', label: 'Free' },
    { value: 'Set Price', label: 'Set Price' }
  ]

  const customStyles: StylesConfig<OptionType, true | false> = {
    option: (provided: any, { isFocused, isSelected }: OptionProps<OptionType, true | false>) => ({
      ...provided,
      backgroundColor: isSelected ? "#4c79fb" : isFocused ? "#c9e0fa" : undefined,
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#c9e0fa",
      },
    }),
    menuList: (provided: any) => ({
      ...provided,
      maxHeight: 150,
      overflowY: 'auto',
    }),
  };

  const handleCategoryChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedCategory(selectedOption);
    setSelectedGender(null);
    setTypeOptions([]);

    if (selectedOption) {
      const categoryValue = selectedOption.value.toLowerCase();

      if (categoryValue !== "novel" && Array.isArray(typeOfCategory.fanfic)) {
        setTypeOptions(typeOfCategory.fanfic);
      }

      if (categoryValue === "novel") {
        setTypeOptions([]);
      }
    }
  };

  const handleGenderChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedGender(selectedOption);

    if (selectedCategory && selectedCategory.value.toLowerCase() === "novel" && selectedOption) {
      const genderValue = selectedOption.value.split(" ")[2].toLowerCase();
      const options = typeOfCategory.novel[genderValue as keyof typeof typeOfCategory.novel];
      setTypeOptions(options || []);
    }
  };

  const handleLanguageChange = (selectedLanguages: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
    setSelectedLanguages(selectedLanguages);
  };

  const handleTagChange = (selectedTag: SingleValue<OptionType>) => {
    setSelectedTag(selectedTag);
    if (selectedTag) {
      if (selectedTag.value === "All Tags") {
        const allTags = [
          ...tagsInTagSections.Character,
          ...tagsInTagSections.Plot,
          ...tagsInTagSections.Setting,
        ];
        setCategoryTagOptions(allTags);
      } else {
        const selectedTagValue = selectedTag.value;
        setCategoryTagOptions(tagsInTagSections[selectedTagValue as keyof typeof tagsInTagSections] || []);
      }
    } else {
      setCategoryTagOptions([]);
    }
  };

  const handleCategoryTagChange = (selectedOptions: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
    setSelectedCategoryTags([...selectedOptions]);
  };

  const handleLengthStoryChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedLengthStory(selectedOption);
  };

  const handleWritingContestChange = (writingContestOptions: SingleValue<OptionType>) => {
    setSelectedWritingContest(writingContestOptions);
  };

  const handleGenderCategoryChange = (genderCategoryOptions: SingleValue<OptionType>) => {
    setSelectedGenderCategory(genderCategoryOptions);
  };

  const handleContentRatingChange = (contentRatingOptions: SingleValue<OptionType>) => {
    setSelectedContentRating(contentRatingOptions);
  };

  const handleBookTypeChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedBookType(selectedOption);
    setSelectedPriceOption(null);
    setIsPriceSet(false);
  };

  const handlePriceChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedPriceOption(selectedOption);
    if (selectedOption?.value === "Set Price") {
      setIsPriceSet(true);
    } else {
      setIsPriceSet(false);
    }
  };

  return (
      <form className="form-style1">
        <div className="row">
          <div className="col-sm-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Title</label>
              <input type="text" className="form-control" placeholder="Your Name"/>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Synopsis</label>
              <textarea
                  cols={30}
                  rows={5}
                  placeholder="Be sure to write a good synopsis because a good synopsis will attract more people to read it."
              />
            </div>
          </div>

          <div className="col-sm-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Abbreviation</label>
              <input type="text" className="form-control" placeholder="No more than 15 characters"/>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Section</label>
              <input type="text" className="form-control" placeholder="No more than 100 characters"/>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Select Category</label>
              <div className="location-area">
                <Select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    options={categoryOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Primary Gender</label>
              <div className="location-area">
                <Select
                    value={selectedGender}
                    onChange={handleGenderChange}
                    options={primaryGender}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Type</label>
              <div className="location-area">
                <Select
                    options={typeOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    isMulti={false}
                    isDisabled={!typeOptions.length}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Language</label>
              <div className="location-area">
                <Select
                    value={selectedLanguages}
                    onChange={handleLanguageChange}
                    options={languageOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={true}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Tags</label>
              <div className="location-area">
                <Select
                    value={selectedTag}
                    onChange={handleTagChange}
                    options={tags}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Category Tags</label>
              <div className="location-area">
                <Select
                    value={selectedCategoryTags}
                    onChange={handleCategoryTagChange}
                    options={categoryTagOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={true}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Length</label>
              <div className="location-area">
                <Select
                    value={selectedLengthStory}
                    onChange={handleLengthStoryChange}
                    options={lengthStoryOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Writing Contest</label>
              <div className="location-area">
                <Select
                    value={selectedWritingContest}
                    onChange={handleWritingContestChange}
                    options={writingContestOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Gender Category</label>
              <div className="location-area">
                <Select
                    value={selectedGenderCategory}
                    onChange={handleGenderCategoryChange}
                    options={genderCategoryOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Content Rating</label>
              <div className="location-area">
                <Select
                    value={selectedContentRating}
                    onChange={handleContentRatingChange}
                    options={contentRatingOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Invitation Code</label>
              <input type="text" className="form-control" placeholder=""/>
            </div>
          </div>

          <div className="col-sm-6 col-xl-4">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Book Type</label>
              <div className="location-area">
                <Select
                    value={selectedBookType}
                    onChange={handleBookTypeChange}
                    options={bookTypeOptions}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    isMulti={false}
                />
              </div>
            </div>
          </div>

          {selectedBookType?.value === 'Single Volume Type' && (
              <>
                <div className="col-sm-6 col-xl-4">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw600 mb10">Set Price</label>
                    <div className="location-area">
                      <Select
                          value={selectedPriceOption}
                          onChange={handlePriceChange}
                          options={setPriceOptions}
                          styles={customStyles}
                          className="select-custom pl-0"
                          classNamePrefix="select"
                          isMulti={false}
                      />
                    </div>
                  </div>
                </div>

                {isPriceSet && (
                    <div className="col-sm-6 col-xl-4">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw600 mb10">Input Price</label>
                        <input type="text" className="form-control" placeholder="Enter price" />
                      </div>
                    </div>
                )}
              </>
          )}

        </div>
      </form>
  );
};

export default NovelDescription;
