package animals;

public class Dolphin extends Mammal
{
	public void echolocate()
	{
		System.out.println("gotcha");
	}

	@Override
	public void communicate() 
	{
		System.out.println("click");
		
	}
	
}
