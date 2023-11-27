import { Template } from "tinacms";

export const opportunity3ComponentSchema: Template = {
  name: "Opportunity3",
  label: "Opportunity variant 3",
  ui: {
    previewSrc: "/blocks/Opportunity3/opportunity.png",
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Title Eng",
      name: "titleEng",
      type: "string",
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "string",
      label: "Subtitle Eng",
      name: "subtitleEng",
    },
    {
      type: "rich-text",
      label: "Description block",
      name: "text",
    },
    {
      type: "rich-text",
      label: "Description block Eng",
      name: "textEng",
    },
    {
      type: "string",
      label: "List title",
      name: "listTitle",
    },
    {
      type: "string",
      label: "List title Eng",
      name: "listTitleEng",
    },
    {
      type: "string",
      label: "Phone",
      name: "phone",
    },
    {
      type: "string",
      label: "Email",
      name: "email",
    },
    {
      type: "string",
      label: "Location",
      name: "location",
    },
    {
      type: "string",
      label: "Location Eng",
      name: "locationEng",
    },
    {
      type: "image",
      label: "Image 1",
      name: "image1",
    },
    {
      type: "image",
      label: "Image 2",
      name: "image2",
    },
  ],
};
