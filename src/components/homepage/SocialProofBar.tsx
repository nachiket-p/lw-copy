export function SocialProofBar() {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by innovative companies
          </p>
          
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {/* Placeholder for client logos */}
            <div className="text-lg font-semibold text-foreground">Cappital Co</div>
            <div className="text-lg font-semibold text-foreground">InnovateTech</div>
            <div className="text-lg font-semibold text-foreground">FutureScale</div>
            <div className="text-lg font-semibold text-foreground">AgileGrow</div>
          </div>
        </div>
      </div>
    </section>
  );
}