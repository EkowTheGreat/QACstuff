package main;

import static org.junit.Assert.*;

import org.junit.Test;

import blackjack.Blackjack;

public class BlackjackTest 
{
	private Blackjack jack = new Blackjack();
	@Test
	public void testHighestWins()
	{
		assertEquals("Highest number did not win",21,jack.play(16,21));
	}
	@Test
	public void testOneBust()
	{
		assertEquals("player has bust but still won",21,jack.play(22, 21));
	}
	@Test
	public void testTwoBust()
	{
		assertEquals("player has bust but still won",21,jack.play(21, 22));
	}
	@Test
	public void testBothBust()
	{
		assertEquals("player has bust but still won",0,jack.play(22, 22));
	}
}
