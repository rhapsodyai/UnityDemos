var uvSpeed: Vector2 = new Vector2(0.0f,1.0f);
var uvOffset: Vector2 = Vector2.zero;
function LateUpdate() {
	uvOffset += (uvSpeed * Time.deltaTime);
	GetComponent.<Renderer>().materials[0].SetTextureOffset("_MainTex", uvOffset);
}