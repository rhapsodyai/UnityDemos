
//Texture Atlas Specifications
var startPixel:Vector2;
var endPixel:Vector2;

function Start() {

	//get object mesh
	var mesh : Mesh = GetComponent(MeshFilter).mesh;
	//get exsisting uvs
	var uvs : Vector2[] = new Vector2[4];
	//get existing material
	var texture : Texture2D = GetComponent.<Renderer>().material.mainTexture;
	//use Sprite shader
	GetComponent.<Renderer>().material.shader = Shader.Find("Sprite");
	//create new uvs from the start and end pixel values
	uvs[0] = new Vector2(startPixel.x/texture.width, (texture.height - endPixel.y)/texture.height);
	uvs[1] = new Vector2(startPixel.x/texture.width, (texture.height - startPixel.y)/texture.height);
	uvs[2] = new Vector2(endPixel.x/texture.width, (texture.height - startPixel.y)/texture.height);
	uvs[3] = new Vector2(endPixel.x/texture.width, (texture.height - endPixel.y)/texture.height);
	//reset the mesh uvs
	mesh.uv = uvs;
	
}