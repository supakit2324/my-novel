"use client";
import Select, {OptionProps, StylesConfig} from "react-select";

const videoField = [
  { value: "Youtube", label: "Youtube" },
  { value: "Facebook", label: "Facebook" },
  { value: "Vimeo", label: "Vimeo" },
];

const customStyles: StylesConfig<{ value: string; label: string }, true> = {
  option: (
      provided: any,
      { isFocused, isSelected }: OptionProps<{ value: string; label: string }, true>
  ) => ({
    ...provided,
    backgroundColor: isSelected
        ? "#eb6753"
        : isFocused
            ? "#eb675312"
            : undefined,
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#eb675312",
    },
  }),
};

const VideoOptionFiled = () => {
  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Video from
          </label>
          <div className="location-area">
            <Select
              defaultValue={[videoField[1]]}
              name="colors"
              options={videoField}
              styles={customStyles}
              className="select-custom pl-0"
              classNamePrefix="select"
              required
              isMulti
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Embed Video id
          </label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
      </div>
    </>
  );
};

export default VideoOptionFiled;
