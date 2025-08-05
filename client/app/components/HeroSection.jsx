import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full py-24 md:py-36 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="w-full">
          <Badge className="mb-4 md:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 text-sm md:text-base px-4 py-2">
            🧠 Cognitive Training Platform
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Train Your Brain.
            <br />
            Boost Your Brilliance.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Interactive brain games and cognitive analytics designed to sharpen your mind daily. Join thousands
            improving their memory, logic, attention, and reasoning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-10 py-4 md:py-6 h-auto rounded-full"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-10 py-4 md:py-6 h-auto bg-transparent rounded-full border-2">
              <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              See How It Works
            </Button>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-blue-200/50 shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Brain visualization with neural network connections"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl md:rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-2xl md:rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
