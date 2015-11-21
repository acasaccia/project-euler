# -*- coding: utf-8 -*-

# Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
# 
# 21 22 23 24 25
# 20  7  8  9 10
# 19  6  1  2 11
# 18  5  4  3 12
# 17 16 15 14 13
#
# It can be verified that the sum of the numbers on the diagonals is 101.
#
# What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

cols = 1001
rows = 1001

directions = ['w', 's', 'e', 'n']

matrix = [[0 for i in range(cols)] for i in range(rows)]
current_direction = 0
current_cell = [0, cols-1]
counter = cols * rows
matrix[current_cell[0]][current_cell[1]] = counter

def next_cell(current_cell):

	global current_direction

	r = current_cell[0]
	c = current_cell[1]
	
	nr = r
	nc = c
	
	#print r," ",c
	#print "current direction: ", directions[current_direction]
	
	change_direction = False
	
	if (directions[current_direction] == 'w'):
		nc = c-1
		if (nc < 0 or matrix[nr][nc] != 0):
			nc = c
			nr = r+1
			change_direction = True
	elif (directions[current_direction] == 's'):
		nr = r+1
		if (nr > rows - 1 or matrix[nr][nc] != 0):
			nr = r
			nc = c+1
			change_direction = True
	elif (directions[current_direction] == 'e'):
		nc = c+1
		if (nc > cols - 1 or matrix[nr][nc] != 0):
			nc = c
			nr = r-1
			change_direction = True
	elif (directions[current_direction] == 'n'):
		nr = r-1
		if (nr < 0 or matrix[nr][nc] != 0):
			nr = r
			nc = c-1
			change_direction = True
			
	if (change_direction):
		current_direction += 1
		current_direction %= 4
	
	#print current_direction
	
	return [nr, nc]
	


while (counter>1):
	current_cell = next_cell(current_cell)
	counter -= 1
	matrix[current_cell[0]][current_cell[1]] = counter

#for i in range(len(matrix)):
#	print matrix[i]

result = 0
for i in range(rows):
	result += matrix[i][i]
	if (matrix[i][i] != matrix[i][rows-1-i]):
		result += matrix[i][rows-1-i]
	
print result
