// 'use client';

// import { useState } from 'react';
// import ScrollReveal from './ScrollReveal';

// export default function Contact2() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');
//     setErrorMsg('');

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Failed to send message');

//       setStatus('success');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setTimeout(() => setStatus('idle'), 5000);
//     } catch (err: unknown) {
//       setStatus('error');
//       setErrorMsg(err.message || 'Something went wrong. Please try again.');
//       setTimeout(() => setStatus('idle'), 5000);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 border rounded-lg">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <span className="inline-block text-primary-600 text-xs font-semibold uppercase tracking-wider bg-primary-50 px-4 py-1 rounded-full border border-primary-200">
//             Get in Touch
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
//             Let&apos;s Build Something <span className="text-primary-700">Great Together</span>
//           </h2>
//           <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
//             We&apos;d love to hear from you — reach out for inquiries, collaborations, or custom orders.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           <ScrollReveal>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
//                 <i className="fas fa-map-pin text-primary-500 text-xl w-6 text-center"></i>
//                 {/* <div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Address</div>
//                   <div className="font-medium">
//                     No. 12/1, SIPCOIT Industrial Complex, Hosur – 635 126, Tamil Nadu, India.
//                   </div>
//                 </div> */}
//               </div>
//               <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
//                 <i className="fas fa-phone text-primary-500 text-xl w-6 text-center"></i>
//                 <div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone</div>
//                   <div className="font-medium">+91 98765 43210</div>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
//                 <i className="fas fa-envelope text-primary-500 text-xl w-6 text-center"></i>
//                 <div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</div>
//                   <div className="font-medium">info@hosurautotrims.com</div>
//                 </div>
//               </div>

//               <div className="flex gap-4 pt-2">
//                 <a
//                   href="tel:+919876543210"
//                   className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-700 transition inline-flex items-center gap-2"
//                 >
//                   <i className="fas fa-phone"></i> Call Us
//                 </a>
//                 <a
//                   href="mailto:info@hosurautotrims.com"
//                   className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold hover:border-primary-400 hover:text-primary-600 transition inline-flex items-center gap-2"
//                 >
//                   <i className="fas fa-envelope"></i> Email Us
//                 </a>
//               </div>
//             </div>
//           </ScrollReveal>

//           <ScrollReveal delay={0.15}>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
//                 />
//               </div>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 required
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
//               />
//               <button
//                 type="submit"
//                 disabled={status === 'loading'}
//                 className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition disabled:opacity-70 flex items-center justify-center gap-2"
//               >
//                 {status === 'loading' ? (
//                   <>
//                     <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     Send Message <i className="fas fa-arrow-right"></i>
//                   </>
//                 )}
//               </button>
//               {status === 'success' && (
//                 <div className="text-green-600 text-sm text-center bg-green-50 py-2 rounded-xl">
//                   ✅ Your message was sent successfully!
//                 </div>
//               )}
//               {status === 'error' && (
//                 <div className="text-red-600 text-sm text-center bg-red-50 py-2 rounded-xl">
//                   ❌ {errorMsg}
//                 </div>
//               )}
//             </form>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }