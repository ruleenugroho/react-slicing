module.exports = {
	settings: {
		"import/resolver": {
			node: {
				paths: ["src"]
			}
		},
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
			"modules": true
		},
		"ecmaVersion": 7,
		"sourceType": "module"
	}
};
