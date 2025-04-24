
---

# 🎲 Random User Generator

**Random User Generator** is a simple and efficient tool designed to generate random user data, including names, addresses, emails, and more. This project is particularly useful for developers and testers who require realistic-looking data for testing purposes, populating mock databases, or creating sample user profiles.

---

## 🌟 Features

- **Random Name Generation**: Generates full names, including first and last names.
- **Email Addresses**: Provides randomly generated email addresses.
- **Physical Addresses**: Includes street addresses, cities, and postal codes.
- **Phone Numbers**: Generates realistic phone numbers.
- **Profile Pictures**: Optionally includes random profile images from a public API.
- **Customizable Output**: Allows users to specify the number of users to generate and the types of data to include.

---

## 🛠️ Technologies Used

- **Python**: The core programming language used for the script.
- **Faker Library**: Utilized for generating fake data.
- **Requests Library**: Used to fetch profile pictures from external sources.
- **JSON**: For structuring the generated data in a readable format.

---

## 🚀 Getting Started

To use the Random User Generator locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Maha-1384/Random-User-Generator.git
   cd Random-User-Generator
   ```

2. **Install Dependencies**:
   Ensure you have Python installed, then install the required libraries:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Script**:
   Execute the script to generate random user data:
   ```bash
   python generate_users.py
   ```

   You can specify the number of users to generate by passing an argument:
   ```bash
   python generate_users.py 10
   ```
   This will generate 10 random users.

---

## 📂 Project Structure

- `generate_users.py`: The main script that generates random user data.
- `requirements.txt`: Lists the Python libraries required to run the script.
- `README.md`: This documentation file.

---

## 🧪 Example Output

Running the script will produce output similar to the following:

```json
[
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St, Springfield, IL 62701",
    "phone": "+1-555-1234",
    "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "address": "456 Oak Ave, Rivertown, TX 75001",
    "phone": "+1-555-5678",
    "profile_picture": "https://randomuser.me/api/portraits/women/2.jpg"
  }
]
```

---

## 📬 Contact

For any questions, suggestions, or contributions, feel free to reach out:

- **GitHub**: [@Maha-1384](https://github.com/Maha-1384)
- **Email**: [maha1384@example.com](mailto:maha1384@example.com)

---

*Thank you for checking out the Random User Generator! Your feedback and contributions are always welcome.* 
