


// import User from "../models/UserSchema.js";
// import Doctor from "../models/DoctorSchema.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// const genereateToken = use=>{
//   return jwt.sign({id:user,_id, role:user.role}, process.env.JWT_SECRET_KEY, {
//     expiresIn:'15d',
//   } )
// }

// export const register = async (req, res) => {
//   const { email, password, name, role, photo, gender } = req.body;

//   try {
//     let existingUser;

//     if (role === "patient") {
//       existingUser = await User.findOne({ email });
//     } else if (role === "doctor") {
//       existingUser = await Doctor.findOne({ email });
//     }

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(password, salt);

//     let newUser;
//     if (role === "patient") {
//       newUser = new User({
//         name,
//         email,
//         password: hashPassword,
//         photo,
//         gender,
//         role,
//       });
//     } else if (role === "doctor") {
//       newUser = new Doctor({
//         name,
//         email,
//         password: hashPassword,
//         photo,
//         gender,
//         role,
//       });
//     } else {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//     await newUser.save();

//     res.status(200).json({ success: true, message: "User successfully created" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// export const login = async (req, res) => {

//   const {email, password} = req.body

//   try {
    
//     let user = null
//     const patient = await User.findOne({email})
//     const doctor = await User.findOne({email})

//     if(patient){
//       user = patient
//     }
//     if(doctor){
//       user=doctor
//     }

//     // checl if user exist or not
//     if(!user) {
//       return res.status(404).json({ message: "user not found"});
//     }
//     // compare password
//     const isPasswordMatch = await bcrypt.compare(password, user.password)
//     if(!isPasswordMatch){
//       return res.status(400).json({status:false, message: "Invalid credentials"});
//     }


//     // get token
//     const token = genereateToken(user);

//     const { password, role, appointments, ... rest } = user._doc;

//     res.status(200)
//     .json({
//       status: true,
//       message: "Successfully login",
//       token,
//       data: { ... rest },
//       role,
//     })

//   } catch (err) {
    
//   }
//   // res.status(200).json({ message: "Login route working!" });

// };











import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d',
  });
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let existingUser;

    if (role === "patient") {
      existingUser = await User.findOne({ email });
    } else if (role === "doctor") {
      existingUser = await Doctor.findOne({ email });
    }

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    let newUser;
    if (role === "patient") {
      newUser = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    } else if (role === "doctor") {
      newUser = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    await newUser.save();

    res.status(200).json({ success: true, message: "User successfully created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};



export const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ status: false, message: "Invalid credentials" });
    }

    const token = generateToken(user);
    const { appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      token,
      data: { ...rest },
      role: user.role,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
