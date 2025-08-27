import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Coins, Gift, Shield, TrendingUp, Users, Zap } from "lucide-react"

export default function XDCLaunchpadLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Coins className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">XDC-Vibe-Launchpad</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Success Stories
            </a>
            <Button variant="outline" size="sm">
              Start 
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-background via-muted/30 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            <Zap className="w-3 h-3 mr-1" />
            Powered by XDC Network
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Unlock Future Gains with <span className="text-primary">XDC Airdrops</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Deposit XDC tokens in our smart contract and receive exclusive airdrops from the most promising projects launching on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Earning Airdrops
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Learn More
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$2.5M+</div>
              <div className="text-sm text-muted-foreground">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Projects Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start earning airdrops from the next generation of XDC projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>1. Deposit XDC</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect your wallet and deposit XDC tokens into our secure smart contract. Your tokens remain yours
                  and can be withdrawn anytime.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>2. Get Verified</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your deposit automatically qualifies you for airdrops from all projects launching on our platform. No
                  additional steps required.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>3. Receive Airdrops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Automatically receive tokens from new projects as they launch. The more XDC you deposit, the larger
                  your airdrop allocation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose XDC-Vibe-Launchpad?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most rewarding way to discover and invest in the future of XDC ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Early Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get first access to the most promising XDC projects before they hit the market. Be an early adopter
                  and maximize your potential returns.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Secure & Audited</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our smart contracts are audited by leading security firms. Your XDC tokens are always under your
                  control and can be withdrawn anytime.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join a community of XDC enthusiasts and early adopters. Share insights, discover new projects, and
                  grow together.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Automatic Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No manual claiming required. Airdrops are automatically distributed to your wallet based on your XDC
                  deposit amount.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Gift className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Multiple Airdrops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  One deposit qualifies you for airdrops from all future projects. The gift that keeps on giving as our
                  ecosystem grows.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Coins className="w-8 h-8 text-primary mb-2" />
                <CardTitle>No Lock-up Period</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your XDC tokens are never locked. Withdraw your deposit anytime while still being eligible for ongoing
                  airdrops.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our community members who have already benefited from exclusive airdrops
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">AK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Alex Kim</div>
                    <div className="text-sm text-muted-foreground">Early Adopter</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "I deposited 10,000 XDC tokens and received airdrops worth over $3,500 from just the first three
                  projects. The platform is incredibly user-friendly and secure."
                </p>
                <div className="flex items-center text-sm text-primary">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>350% ROI from airdrops</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Martinez</div>
                    <div className="text-sm text-muted-foreground">DeFi Investor</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The automatic distribution feature is amazing. I don't have to worry about missing airdrops or manual
                  claiming. Everything happens seamlessly in my wallet."
                </p>
                <div className="flex items-center text-sm text-primary">
                  <Gift className="w-4 h-4 mr-1" />
                  <span>12 successful airdrops received</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">RJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Raj Patel</div>
                    <div className="text-sm text-muted-foreground">Crypto Enthusiast</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Being able to withdraw my XDC anytime while still earning airdrops gives me complete peace of mind.
                  This is the future of launchpad participation."
                </p>
                <div className="flex items-center text-sm text-primary">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>Zero lock-up, maximum flexibility</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">LC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Lisa Chen</div>
                    <div className="text-sm text-muted-foreground">Portfolio Manager</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "I've participated in traditional launchpads before, but XDC-Vibe-Launchpad's approach is
                  revolutionary. Early access to quality projects with guaranteed allocations."
                </p>
                <div className="flex items-center text-sm text-primary">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Member since launch day</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Mike Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Blockchain Developer</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The smart contract security and transparency impressed me as a developer. I've recommended
                  XDC-Vibe-Launchpad to my entire network of crypto investors."
                </p>
                <div className="flex items-center text-sm text-primary">
                  <Zap className="w-4 h-4 mr-1" />
                  <span>Referred 25+ new users</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">JW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Jennifer Wong</div>
                    <div className="text-sm text-muted-foreground">Institutional Investor</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Our fund has allocated a significant portion to XDC-Vibe-Launchpad. The consistent airdrop rewards
                  and project quality have exceeded our expectations."
                </p>
                <div className="flex items-center text-sm text-primary">
                  <Coins className="w-4 h-4 mr-1" />
                  <span>$500K+ deposited</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Earning Airdrops?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of XDC holders who are already earning from the next generation of blockchain projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Connect Wallet & Deposit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Coins className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">XDC-Vibe-Launchpad</span>
              </div>
              <p className="text-muted-foreground">The premier tokenized launchpad for the XDC ecosystem.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Smart Contract
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security Audit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 XDC-Vibe-Launchpad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
