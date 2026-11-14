module.exports = {
  packagerConfig: {
    asar: true,
    executableName: 'Freestyler'
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'freestyler',
        authors: 'GC Shoro',
        description: 'Juego interactivo de freestyle y batallas de rap',
        setupExe: 'Freestyler-Setup.exe'
      }
    }
  ]
};