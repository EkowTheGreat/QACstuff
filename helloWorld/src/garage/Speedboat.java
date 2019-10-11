package garage;

public class Speedboat extends Vehicle
{
	public Speedboat()
	{
		this.setNumOfWheels(0);
		this.setName("Speedboat");
	}
	public Speedboat( int topSpeed, int numOfSeats)
	{
		super();
		this.setNumOfWheels(0);
		this.setNumOfSeats(numOfSeats);
		this.setSpeed(topSpeed);
		this.setName("Speedboat");
	}
	@Override
	public void drive() {
		System.out.println("Whoosh!! ");
		
	}
	

}
