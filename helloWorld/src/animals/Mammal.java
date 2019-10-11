package animals;

public abstract class Mammal extends Animal
{
	private int amountOfHair;
	public int getAmountOfHair() {
		return amountOfHair;
	}
	public void setAmountOfHair(int amountOfHair) {
		this.amountOfHair = amountOfHair;
	}
	public Mammal()
	{
	super();
	}
	public void communicate() {
		System.out.println("bleeh");
		
	}
}
