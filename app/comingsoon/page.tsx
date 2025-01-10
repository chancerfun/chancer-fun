'use client';
import AppLayout from '@/components/AppLayout';

export default function comingsoon() {
    return (
      <AppLayout>
        <div className="min-h-screen p-8 justify-center items-center">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="animate-pulse space-y-8">
            <div className="h-full bg-cyber-blue/10 rounded-lg flex justify-center items-center text-4xl font-robotic animate-typing-effect repeat">
              We 🤖 are building this feature very soon. 
            </div>
            <style jsx>
            {`
              @tailwind base;
              @tailwind components;
              @tailwind utilities;

              @keyframes typing-effect {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }

              .animate-typing-effect {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                animation: typing-effect 3s steps(30, end), blink-caret 0.5s step-end infinite;
                border-right: 4px solid rgba(255, 255, 255, 0.75);
              }

              @keyframes blink-caret {
                from, to {
                  border-color: transparent;
                }
                50% {
                  border-color: rgba(255, 255, 255, 0.75);
                }
              }

              .font-robotic {
                font-family: 'Roboto Mono', monospace;
              }
            `}
            </style>

            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
