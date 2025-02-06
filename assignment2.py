import numpy as np
import matplotlib.pyplot as plt

# Parameters for the system
r = 1.0       # amplitude (assume some initial value)
w = 0.5       # noise constant
m = 1.0       # mass
k = 1.0       # spring constant
phi = 0.0     # initial phase

# Calculate wd based on the provided formula
wd = np.sqrt((w**2 / (4 * m)) - (k / m**2))

# Time vector
t = np.linspace(0, 10, 1000)  # from 0 to 10 seconds, 1000 points

# Displacement equation x(t) for the damped, noisy system
x = r * np.exp(-w / (2 * m) * t) * np.cos(wd * t - phi)

# Plotting the displacement over time
plt.figure(figsize=(10, 6))
plt.plot(t, x, label=r'$x = r e^{-\frac{w}{2}t} \cos(w_d t - \phi)$', color='blue')
plt.title('Displacement of Damped System with Noise Over Time')
plt.xlabel('Time (t)')
plt.ylabel('Displacement (x)')
plt.legend()
plt.grid(True)
plt.show()
