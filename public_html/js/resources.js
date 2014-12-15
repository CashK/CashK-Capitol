game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        //call the game entities and building blocks within netbeans to be recognized by the program
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        {name: "hero1", type:"image", src: "data/img/hero1.png"},
        {name: "title-screen", type:"image", src: "data/img/title-screen.png"},
        {name: "slime", type:"image", src: "data/img/slime-spritesheet.png"},
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        //call the game maps to be recognized by the program
        {name: "Stage01", type: "tmx", src: "data/map/Stage01.tmx"},
        {name: "Stage02", type: "tmx", src: "data/map/Stage02.tmx"},
        {name: "Stage03", type: "tmx", src: "data/map/Stage03.tmx"},
        {name: "Stage04", type: "tmx", src: "data/map/Stage04.tmx"}

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
