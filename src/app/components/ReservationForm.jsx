'use client';
import { Loader2, Router } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push('/confirmation');
    }, 2000);
  };

  return (
    <form role="form" onSubmit={handleSubmit(onSubmit)} className="">
      <div className="pt-2">
        <label className="block text-sm font-medium pb-1" htmlFor="name">
          Name
        </label>
        <input
          aria-required
          id="name"
          name="name"
          className="border rounded-md w-56 h-10 px-2"
          type="text"
          {...register('name', { pattern: /^[A-Za-z\s]+$/, required: true })}
        />
        {errors.name && <p className="text-red-500 text-sm">Name Required</p>}
      </div>
      <div className="pt-2">
        <label className="block text-sm font-medium pb-1" htmlFor="email">
          Email
        </label>
        <input
          aria-required
          name="email"
          className="border rounded-md w-56 h-10 px-2"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <p className="text-red-500 text-sm">Email Required</p>}
      </div>
      <div className="pt-2">
        <label className="block text-sm font-medium pb-1" htmlFor="email">
          Phone
        </label>
        <input
          aria-required
          name="phone"
          className="border rounded-md w-56 h-10 px-2"
          type="tel"
          {...register('phone', { pattern: /^\d{3}-?\d{3}-?\d{4}$/, required: true })}
        />
        {errors.phone && <p className="text-red-500 text-sm">10 Digit Number Required</p>}
      </div>
      <div className="pt-2">
        <label className="block text-sm font-medium pb-1" htmlFor="time">
          Guests
        </label>
        <select
          aria-required
          name="guests"
          id="guests"
          className="border rounded-md w-56 h-10 px-2 text-sm"
          {...register('guests', { required: true })}
        >
          <option value="" className="">
            Number Of Guests
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>
        {errors.guests && <p className="text-red-500 text-sm">Selection Required</p>}
      </div>
      <div className="pt-2">
        <label className="block text-sm font-medium pb-1 " htmlFor="date">
          Date
        </label>
        <input
          aria-required
          name="date"
          min="2023-11-05"
          max="2023-11-10"
          className="border rounded-md w-56 h-10 px-2 text-sm"
          type="date"
          {...register('date', { required: true })}
        />
        {errors.date && <p className="text-red-500 text-sm">Date Required</p>}
      </div>
      <div className="pt-2">
        <label className="block text-sm font-medium pb-1" htmlFor="time">
          Time
        </label>
        <select
          aria-required
          name="time"
          id="time"
          className="border rounded-md w-56 h-10 px-2 text-sm"
          {...register('time', { required: true })}
        >
          <option value="" className="">
            Choose Time
          </option>
          <optgroup label="Lunch">
            <option value="1230" className="">
              12:30PM
            </option>
            <option value="1245">12:45PM</option>
            <option value="1">1PM</option>
          </optgroup>
          <optgroup label="Dinner">
            <option value="530" className="">
              5:30PM
            </option>
            <option value="545">5:45PM</option>
            <option value="6">6PM</option>
            <option value="630">6:30PM</option>
            <option value="645">6:45PM</option>
          </optgroup>
        </select>
        {errors.time && <p className="text-red-500 text-sm">Selection Required</p>}
      </div>
      <div className="pt-4">
        {!isSubmitting && (
          <Button type="submit" className="w-full bg-[#F4CE14] text-black hover:bg-yellow-500">
            Reserve
          </Button>
        )}
        {isSubmitting && (
          <Button
            disabled
            type="submit"
            className="w-full bg-[#F4CE14] text-black hover:bg-yellow-500"
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        )}
      </div>
    </form>
  );
}
