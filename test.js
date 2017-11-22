import test from 'ava';
import './';

test(t => {
	t.is(Math.bound(6, -3, 3), 3);
	t.is(Math.bound(-6, -3, 3), -3);
	t.is(Math.bound(0, -3, 3), 0);
});

test(t => {
	let x = 6;
	t.is(x.bound(-3, 3), 3);
	x = -6;
	t.is(x.bound(-3, 3), -3);
	x = 0;
	t.is(x.bound(-3, 3), 0);
});