Shader "Backface On" {
	Properties {
		_Color ("Color", Color) = (1,1,1,0)
		_SpecColor ("Spec Color", Color) = (1,1,1,1)
		_Emission ("Emissive Color", Color) = (0,0,0,0)
		_Shininess ("Shininess", Range(0.01,1)) = 0.7
		_MainTex ("Base (RGB)", 2D) = "white" { }

	}
	
	SubShader {
		Material {
			Diffuse [_Color]
			Ambient [_Color]
			Shininess [_Shininess]
			Specular [_Specular]
			Emission [_Emission]
		}
		Lighting On
		SeparateSpecular On
		//set up alpha blending
		Blend SrcAlpha OneMinusSrcAlpha
		//Render the back facing parts of the object
		//If the object is convex, these will be closer than the
		//back-faces.
		Pass {
		
			Cull Back
			SetTexture [_MainTex] {
				Combine Primary * Texture
			}
		}
	}
}	