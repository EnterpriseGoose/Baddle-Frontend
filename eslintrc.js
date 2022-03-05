module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['airbnb-typescript', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		project: './tsconfig.json',
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['import', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/semi': ['warn', 'always'],
		'@typescript-eslint/indent': ['warn', 'tab'],
		'linebreak-style': ['error', 'windows'],
		'@typescript-eslint/no-unused-vars': 'off',
		'no-console': 'off',
		'no-tabs': 'off',
		'max-len': [
			'warn',
			{
				code: 80,
				tabWidth: 4,
				comments: 150,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		'@typescript-eslint/no-unused-expressions': 'off',
		'prefer-template': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
				bundledDependencies: false
			}
		]
	}
};
