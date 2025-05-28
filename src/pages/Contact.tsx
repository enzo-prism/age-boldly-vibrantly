
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. Suz will get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-teal/10 to-coral/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch with Suz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about the Rebellious Aging movement? Need personalized advice? 
            I'd love to hear from you and support you on your journey.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me what's on your mind..."
                      className="min-h-32"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-teal hover:bg-teal-dark">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Whether you're just starting your rebellious aging journey or looking for specific guidance, 
                  I'm here to help. Don't hesitate to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">suz@rebelliousaging.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-coral/10 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Social Media</h3>
                    <p className="text-gray-600">Follow for daily inspiration</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Connect with the community on our social platforms
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-teal/5 to-coral/5 border-teal/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Personalized advice based on your unique situation</li>
                    <li>• Support and encouragement for your journey</li>
                    <li>• Resources tailored to your interests and goals</li>
                    <li>• Connection to our vibrant community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
