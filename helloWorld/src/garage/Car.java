package garage;

public class Car extends Vehicle 
{
	public Car()
	{
		
		this.setNumOfWheels(4);
		this.setName("Car");
	}
	public Car( int topSpeed, int numOfSeats)
	{
		super();
		this.setNumOfWheels(4);
		this.setNumOfSeats(numOfSeats);
		this.setSpeed(topSpeed);
		this.setName("Car");
	}
	

	@Override
	public void drive() {
		System.out.println("vrooom!!!");
		
	}
}
