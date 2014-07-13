#pragma strict

var TheWalk : Transform;

function Update ()
{
	if (TheWalk.animation.isPlaying == false)
	{
		TheWalk.animation.CrossFade("PlayerIdle");
	}
	
	if (Input.GetKey (KeyCode.W) || Input.GetKey (KeyCode.A) || Input.GetKey (KeyCode.S) || Input.GetKey (KeyCode.D))
	{
		TheWalk.animation.CrossFade ("PlayerWalk");
	}
	
	if (Input.GetKey (KeyCode.LeftShift))
	{
		TheWalk.animation.CrossFade ("PlayerRun");
	}
	
	if (Input.GetKeyDown (KeyCode.LeftShift))
	{
		TheWalk.animation.Stop ("PlayerWalk");
	}
	
	if (Input.GetKeyUp (KeyCode.LeftShift))
	{
		TheWalk.animation.CrossFade ("PlayerWalk");
	}
}