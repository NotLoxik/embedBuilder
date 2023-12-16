module.exports = {
  packagerConfig: {
    asar: true,
    icon: "src/assets/img/icon",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl:
          "https://notloxik.github.io/embedBuilder/src/assets/img/icon.ico",
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: "src/assets/img/icon.ico",
      },
    },
    {
      // Path to a single image that will act as icon for the application
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "/path/to/icon.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
