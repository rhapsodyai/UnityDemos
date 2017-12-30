using UnityEngine;
using System.Collections;

public class ImageMove : MonoBehaviour {
	Vector3 StartPos;

	// Use this for initialization
	void Start () {
		Transform tr = this.GetComponent<Transform> ();
		this.StartPos = tr.position;
	
	}
	
	// Update is called once per frame
	void Update () {
		Transform tr = this.GetComponent<Transform> ();
		Vector3 pos = tr.position;
		pos.x = this.StartPos.x + Random.Range (-2.0f, 2.0f);
		pos.y = this.StartPos.y + Random.Range (-2.0f, 2.0f);
		tr.position = pos;
	}
}
