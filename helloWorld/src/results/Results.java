package results;

public class Results {
	private double physics = 0;
	private double chemistry = 0;
	private double biology = 0;
	private double total = 0;
	private double percentage = 0;
	private final int passMark = 60;
	private boolean passoverall = true;
	
	

	public void getMarks(int phys, int chem, int bio) {
		physics = phys;
		chemistry = chem;
		biology = bio;
	
		String line ="";
		
		getPercentage();
		
		//fail
		if(physics<passMark)
		{
			line += "You failed physics ";
			//System.out.println("You failed physics");
			passoverall = false;
		}
		if(chemistry<passMark)
		{
			//System.out.println("You failed chemistry");
			line +=  "You failed chemistry "; 
			passoverall = false;
		}
		if(biology<passMark)
		{
			line += "You failed biology ";
			//System.out.println("You failed biology");
			passoverall = false;
		}
		
		
	
		if(passoverall == true)
		{
			System.out.println("Congratulations!!! you passed with : "+(int)percentage);
		}
		if(passoverall == false)
		{
			//System.out.println("You failed this course. Final percent : "+(int)percentage);
			System.out.println("You failed because "+line+" Final percent : "+(int)percentage);
		}
	}

	private void getPercentage() {
		total = physics + chemistry + biology;
		total /= 450;
		percentage = total * 100;
		
		physics = (physics/150)*100;
		chemistry =(chemistry/150)*100;
		biology =(biology/150)*100;
	}

}
