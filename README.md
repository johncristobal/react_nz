```
{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"create class react": {
        "prefix": "component",
        "body": [
            "import { Component } from \"react\";",
            "",
            "class ${1:name} extends Component{",
            "    render(){",
			"        return(",
			"        )",
			"    }",
            "}",
			"",
			"export default ${1:name};"
        ]
	},
	"create object react": {
        "prefix": "component_react",
        "body": [
            "const ${1:name} = () => {",
			"    return(",
			"    )",
            "}",
			""
        ]
	}
}
```
