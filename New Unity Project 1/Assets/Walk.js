#pragma strict

var TheWalk : Transform;

function Update ()
{
	if (Input.GetButtonDown ("Vertical"))
	{
		TheWalk.animation.Play("walk");
	}
	else if (Input.GetButtonUp("Vertical"))
	{
    	TheWalk.animation.Stop("walk");
    }
}