fun hello(name: String = ""): String {
	if(name.trim() == ""){
		return "Hello, World!"
	}
    return "Hello, $name!"
}