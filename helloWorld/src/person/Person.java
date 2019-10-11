package person;

public class Person 
{
	private String name = "";
	private int age;
	private String jobTitle="";
	private String line;
	public Person()
	{
		
		
	}
	
	public void getDetails()
	{
		//String line="";
		line = name+ " is "+age+ " years old and is a "+jobTitle;
		System.out.println(line);
		
	}
	public String getPrintDetails()
	{
		
				line = name+ " "+age+ " "+jobTitle;
				
				return line;
	}
	public void setDetails(String name, int age, String jobTitle)
	{
		this.name = name;
		this.age = age;
		this.jobTitle= jobTitle;
		
		//getDetails();
	}
	public String getName()
	{
		
		//System.out.println(name);
		return name;
	}
}
