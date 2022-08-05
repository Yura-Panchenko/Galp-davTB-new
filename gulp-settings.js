const devDir = './src';
const publicDir = './dist';

module.exports = {
	publicDir,
	devDir,
	assetsDir: {
		entry: `${devDir}/assets`,
		output: publicDir
	},
	viewsDir: {
		entry: `${devDir}/views`,
		output: publicDir
	},
	imagesDir: {
		entry: `${devDir}/assets/images`,
		output: `${publicDir}/images`
	},
	scssDir: {
		entry: `${devDir}/styles`,
		output: `${publicDir}/css`,
		mainFileName: 'style'
	},
	pugDir: {
		entry: `${devDir}/views`,
		output: publicDir
	},
	jsDir: {
		entry: `${devDir}/js`,
		output: `${publicDir}/js`
	}
};
