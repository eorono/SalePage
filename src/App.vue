<script setup lang="ts">
// Aquí puedes agregar lógica en TypeScript más adelante si la necesitas
</script>

<template>
  <div class="bg-brand-dark text-gray-100 font-sans antialiased overflow-x-hidden min-h-screen">
    
    <nav class="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-brand-dark/80 border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0 flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary"></div>
                    <span class="font-bold text-xl tracking-tight">PromptEdit</span>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">Marketplace</a>
                    <a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">AI Tools</a>
                    <a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">Plugins</a>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="#" class="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</a>
                    <a href="#" class="px-5 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/5 rounded-full transition-all duration-200">
                        Start Selling
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <main class="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Now integrating Veo &amp; KlingAI models
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Monetize your creativity <br class="hidden md:block" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                    at the speed of thought.
                </span>
            </h1>
            
            <p class="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join hundreds of thousands of passionate creators. Sell your assets, leverage next-gen AI tools, and scale your income on the most intuitive video editing marketplace.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="#" class="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-white text-brand-dark rounded-full hover:bg-gray-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Apply as a Creator
                </a>
                <a href="#" class="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-transparent border border-white/20 rounded-full hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2">
                    Explore Marketplace
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>
        </div>
        
        <div class="mt-20 max-w-5xl mx-auto px-4 sm:px-6 relative">
            <div class="rounded-2xl border border-white/10 bg-brand-card shadow-2xl overflow-hidden aspect-video relative flex items-center justify-center">
                <div class="absolute inset-0 bg-gradient-to-br from-brand-card to-[#1a1a2e] opacity-80"></div>
                <div class="relative z-10 text-center">
                    <svg class="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p class="text-sm text-gray-500 font-medium tracking-widest uppercase">Intuitive UI Preview</p>
                </div>
            </div>
        </div>
    </main>

    <section class="py-24 bg-black border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Built for the modern workflow</h2>
                <p class="text-gray-400">Everything you need to create, manage, and sell seamlessly.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-primary/30 transition-colors group">
                    <div class="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">AI Generation Models</h3>
                    <p class="text-gray-400 leading-relaxed">Direct access to Veo, Nano Banana, and KlingAI. Generate mind-blowing assets natively within your workspace.</p>
                </div>

                <div class="p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-secondary/30 transition-colors group">
                    <div class="w-12 h-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Native Integrations</h3>
                    <p class="text-gray-400 leading-relaxed">Push directly to DaVinci Resolve and Adobe Premiere Pro with our dedicated, lightweight extensions.</p>
                </div>

                <div class="p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-white/20 transition-colors group">
                    <div class="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">High Commissions</h3>
                    <p class="text-gray-400 leading-relaxed">Keep more of what you earn. Our intuitive marketplace connects your art directly with buyers seamlessly.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/10"></div>
        <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to skip the rendering wait?</h2>
            <p class="text-xl text-gray-400 mb-10">Join the dev team or start selling as a creator today.</p>
            <button class="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full hover:scale-105 transition-transform shadow-lg">
                Join PromptEdit Now
            </button>
        </div>
    </section>

  </div>
</template>