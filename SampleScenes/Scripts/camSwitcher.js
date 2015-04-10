/*Script for switching between cameras in your scene. First Create an empty game object
and rename it camSwitcher or something that will signify this is the doohickey for switching cameras.*/

public var firstPerson: Camera;
public var thirdPerson: Camera;

function Start() {
thirdPerson.GetComponent.<Camera>().enabled = true;
firstPerson.GetComponent.<Camera>().enabled = false;
}

function Update() {

if (Input.GetKey(KeyCode.F1)) 

{
firstPerson.GetComponent.<Camera>().enabled = true;
thirdPerson.GetComponent.<Camera>().enabled = false; //Pushing the "F1" key will enable a first peson perspective.

}

if (Input.GetKey(KeyCode.F2)) 

{
firstPerson.GetComponent.<Camera>().enabled = false;
thirdPerson.GetComponent.<Camera>().enabled = true; //Pushing "F2" will enable a third person perspective.

}
}