"use client";
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { saveContact } from "../../_actions/postAction"; // Import the correct action
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 801 575 2367',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'Jerinr906@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Kanayakumari(Dist), Mekkamandapam(Post), 629166(Zip code)',
  },
];

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);


  const onSubmit = async (data) => {
    try {
      // Call the server action to save the contact data
      setLoading(true);
      const res = await saveContact(data); // Correctly call the saveContact action with form data
      if (res.errMsg) {
        console.error('Error:', res.errMsg);
      } else {
        console.log('Success:', res.msg);
       toast.success('Message send successfully')

        // Optionally redirect or show success message
        router.push('/'); // Example redirect after successful submission
      }
    } catch (error) {
      toast.error('Message send error please try agin ')

      setLoading(false);
      console.error('An error occurred:', error.message);
    }
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-blue-700">Let's work together</h3>
              <p className="text-white/60">
                Skilled in both technical communication and teamwork, I excel in
                collaborative environments, ensuring seamless integration and
                effective problem-solving. My ability to articulate complex
                concepts clearly enhances team understanding and drives project
                success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Input
                    {...register('firstname', { required: 'Firstname is required' })}
                    placeholder="Firstname"
                  />
                  {errors.firstname && (
                    <span className="text-red-700">{errors.firstname.message}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    {...register('lastname', { required: 'Lastname is required' })}
                    placeholder="Lastname"
                  />
                  {errors.lastname && (
                    <span className="text-red-700">{errors.lastname.message}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className="text-red-700">{errors.email.message}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    placeholder="Phone number"
                  />
                  {errors.phone && (
                    <span className="text-red-700">{errors.phone.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="service"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Service is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a service</SelectLabel>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="back-end">Backend Development</SelectItem>
                          <SelectItem value="full-stack">Full Stack Development</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.service && (
                  <span className="text-red-700">{errors.service.message}</span>
                )}
              </div>
              <Textarea
                {...register('message', { required: 'Message is required' })}
                className="h-[200px]"
                placeholder="Type your message here."
                type="text"
              />
              {errors.message && (
                <span className="text-red-700">{errors.message.message}</span>
              )}
              <Button type="submit" size="md" className="max-w-40">
              {loading ? (
                <div className='flex items-center justify-center'>
                  <Loader2 className='text-white size-5 animate-spin'/>
                </div>
              ): "Send message"}  
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-blue-700 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
