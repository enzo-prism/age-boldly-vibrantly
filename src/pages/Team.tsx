import React from 'react';

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-foreground">
            Team
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Meet the creative minds behind Rebellious Aging
          </p>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
            
            {/* Photographer */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-foreground">
                Photographer
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Coming soon - We'll be introducing our talented photographer who captures the essence of rebellious aging through stunning visual storytelling.
              </p>
            </div>
            
            {/* Website Designer */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-foreground">
                Website Designer
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Coming soon - Meet our creative web designer who brings the rebellious aging vision to life through beautiful, user-friendly digital experiences.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;