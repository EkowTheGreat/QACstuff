package garage;

public class Motorbike extends Vehicle
{
	public Motorbike()
	{
		this.setNumOfWheels(2);
		this.setName("Motorbike");
	}
	public Motorbike( int topSpeed, int numOfSeats)
	{
		super();
		this.setNumOfWheels(2);
		this.setNumOfSeats(numOfSeats);
		this.setSpeed(topSpeed);
		this.setName("Motorbike");
	}
	@Override
	public void drive() {
		System.out.println("grrr!!!!");
		
	}

}
