module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, #03380A 0%, #04450D 32%, #065710 65.5%, #076612 100%)",
        "primary-gradient2":
          "linear-gradient(270deg, #3D8758 0%, #3D7350 51.5%, #48AC6B 100%)",
      },
      boxShadow: {
        "custom-light": "0px 0px 0.84px 0px #30497433",
        "custom-dark": "0px 0.84px 4px -1px #2E4F8833",
        "search-bar": "0px 4px 24px 0px #B9B5B566",
        "filter-button": "0px 4px 12px 0px #B9B5B53D",
        "icon-button": "0px 4px 24px 0px #0000001F",
        notification: "0px 4px 24px 0px #0000001F",
        calendar: "0px 4px 4px 0px #00000014",
        card: "0px 2px 8px 0px #00000014",
        "footer-buttons": "0px -4px 24px 0px #00000014",
        avatar: " 0px 4.8px 8px 0px #89878733",
        "participated-card": "0px 4px 24px 0px #0000001F",
        "product-card": "0px 2px 24px 0px #0000000F",
        "profile-img": "0px 4.8px 8px 0px #89878733",
        "profile-img-lg": "0px 8px 13.33px 0px #89878733",
        "copy-button": "0px 1px 2px 0px #1018280F",
      },
      colors: {
        primary1: "#F0F9FC",
        primary5: "#3DAC78",
        primary6: "#35945C",
        stroke1: "#F5F6F7",
        stroke2: "#EEF0F2",
        surface: "#FAFBFC",
        blue5: "#4C87D9",
        red4: "#EE2F2F",
        gray1: "#F4F6F4",
        gray2: "#DDE3DD",
        gray3: "#BCC8BC",
        gray4: "#8FA38F",
        gray5: "#6E876E",
        gray6: "#536553",
        gray7: "#6E7987",
        gray8: "#535B65",
        gray9: "#003D52",
        green1: "#ECFEEE",
        green2: "#CFF3D3",
        green3: "#52CE92",
        green4: "#038546",
        green5: "#3DAC78",
        green7: "#004222",
        brown1: "#F8EFE6",
        brown6: "#8F5C28",
        yellow4: "#FFD800",
        purple4: "#1274F6",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const scrollbarUtilities = {
        ".hide-scrollbar": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Chrome, Safari, Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(scrollbarUtilities);
    },
  ],
};
