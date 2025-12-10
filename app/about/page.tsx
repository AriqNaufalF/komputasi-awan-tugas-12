"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Back button */}
                <div className="pt-8 px-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Tasks
                    </Link>
                </div>

                {/* Main content */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    {/* Hero section */}


                    {/* Team section - Added programmer biodata cards section */}
                    <div className="mb-16 space-y-8">
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600">
                            Kelompok Kami
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Programmer 1 (Cyan) */}
                            <div className="group relative overflow-hidden rounded-2xl border border-cyan-200 bg-white bg-gradient-to-br from-white to-cyan-50 p-8 hover:border-cyan-500 transition-all shadow-sm hover:shadow-xl hover:shadow-cyan-500/10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-cyan-800 group-hover:text-cyan-600 transition-colors">
                                        Ariq Naufal Fadhlurrahman
                                    </h3>
                                    <p className="text-sm font-medium text-cyan-600/80">
                                        NIM: 103012480010
                                    </p>
                                </div>
                            </div>

                            {/* Programmer 2 (Fuchsia) */}
                            <div className="group relative overflow-hidden rounded-2xl border border-fuchsia-200 bg-white bg-gradient-to-br from-white to-fuchsia-50 p-8 hover:border-fuchsia-500 transition-all shadow-sm hover:shadow-xl hover:shadow-fuchsia-500/10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-transparent" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-fuchsia-800 group-hover:text-fuchsia-600 transition-colors">
                                        Dennis Havinanda
                                    </h3>
                                    <p className="text-sm font-medium text-fuchsia-600/80">
                                        NIM: 103012480022
                                    </p>
                                </div>
                            </div>

                            {/* Programmer 3 (Violet) */}
                            <div className="group relative overflow-hidden rounded-2xl border border-violet-200 bg-white bg-gradient-to-br from-white to-violet-50 p-8 hover:border-violet-500 transition-all shadow-sm hover:shadow-xl hover:shadow-violet-500/10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-transparent" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-violet-800 group-hover:text-violet-600 transition-colors">
                                        Muhammad Sadri
                                    </h3>
                                    <p className="text-sm font-medium text-violet-600/80">
                                        NIM: 103012480011
                                    </p>
                                </div>
                            </div>

                            {/* Programmer 4 (Emerald) */}
                            <div className="group relative overflow-hidden rounded-2xl border border-emerald-200 bg-white bg-gradient-to-br from-white to-emerald-50 p-8 hover:border-emerald-500 transition-all shadow-sm hover:shadow-xl hover:shadow-emerald-500/10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                                        Hermanus Hasta Wicaksana
                                    </h3>
                                    <p className="text-sm font-medium text-emerald-600/80">
                                        NIM: 103012480031
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
