var a = {
  version: 2,
  name: "music-album",
  builds: [{ src: "src/server.js", use: "@vercel/node" }],
  routes: [{ src: "/(.*)", dest: "/src/server.js" }],
};
