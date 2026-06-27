const fs = require('fs');

const { engines, accessories, distributors, localizedSolutionPages, proEngines, supportPages } = require('./app/lib/seo-data.ts');
// Wait, seo-data.ts is typescript, I cannot require it directly in pure node without compilation unless I parse it or use ts-node.
// Since I just want to generate an artifact, I can hardcode the categories or read them using a fast regex, but actually, writing markdown directly in the thought process and saving it as an artifact via write_to_file is much easier!
