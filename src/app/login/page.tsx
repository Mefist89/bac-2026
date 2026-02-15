import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full font-display">
      {/* Hero Section (Left) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-orange-100 dark:bg-accent-dark">
        <div className="absolute inset-0 z-0">
          {/* Using img for external resource as per plan, or ideally Next/Image with domain config */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtyzeFAw1uwb_tkKogB5Eohzm0U_qCSVDS3tYb7eaQO5lNwHDvH2quxdXVl0F_QOFFxdkUGda8IO5_OfuO4w_Z35poG5HaOHjyxTvt3F36QZpcZBc35Hbuqvt1zjCH7krmQkXZAs75Yurqut-N9zTbR69gh2GM0HnY-RLfjYtJ4WQpk1lZ30D3uSgpAkfHZon7fylQhCFmEsAxtgYAa2iZbmFjIIkatTR8Yc2ybvzeMYdJjbpHtc-jStkA7G76Jgda8kXLN3oKYX4r"
            alt="Student coding"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-100 dark:opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-[#f27f0d]/80 via-[#f27f0d]/40 to-white/10 dark:from-[#0F172A] dark:via-[#0F172A]/80 dark:to-[#f27f0d]/30"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-start p-16 w-full max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-white dark:bg-[#f27f0d] flex items-center justify-center rounded-xl shadow-xl shadow-black/10 dark:shadow-[#f27f0d]/20">
              <span className="material-icons text-[#f27f0d] dark:text-white">
                code
              </span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
              BAC INFO
            </span>
          </div>

          <h1 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            Ești gata pentru{" "}
            <span className="underline decoration-4 underline-offset-8 dark:text-[#f27f0d] dark:no-underline">
              10 la Informatică
            </span>
            ?
          </h1>

          <p className="text-white/90 dark:text-slate-300 text-lg max-w-md leading-relaxed font-medium">
            Accesează resursele premium, rezolvă variantele propuse și
            monitorizează-ți progresul către succesul la examenul de
            Bacalaureat.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDovyTjFiOVCNsKbe5LV11jPbzYoJkS1z2_s15nGwV4-rf9jNqt4--QP796P3j2z6Klyb1r-le3DjrAtGtZJ4Ey9rH3pp17fl9fkUz4g-N-sUMwq0czKTnQJgrnSOf05J2BiXbCp2mT4hGV9tDQ_YHShm09PEE5ZcZNWVcEokgtZaY-IE09yiy8f4g71nOEsnWeO9g489VlK7XE94RDuulQB_mHsI0pMKTl8fze6sx2O1cSk5RUY9XfiLBiVCwIjbP48HwmEVe9Acg3"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0F172A]"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBve_BeNT1qOn0z9Bfmcq7tbqOBxAAuFoRWHximilCx4gdaNHnbX7rGN7DPorXBM6txPvwUP6h5WAPmPz3fVcekbECabcx7b8XIrtbDFrVd_4McQ8wwCZuhb1_qpfyarEdEVnR2-jCyLuVaWrvgKoKpXoYfaWcs9zgwu98HwTWh9nZT7gHH1MM8IR-u2hMS_i53aLNech2-9I9KC57PnVdIqvndeNn2v-VvEonPA4uTo0UPEpzXULWsdc-U6Vaf8ZKTEdT4KM7Y22EC"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0F172A]"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRtfTZ5BBq9gooOJ8YOdUk3UmxUyzMSQ-yMJRoh1dDdYPUZ5fOqPTzED8yoGaCKjbIZJHkhrWfuRfeA7QSBanfbnPXP6u-Of5iUUcUDTbUgiSGypLxFgW8Qlwq2hgJvW9hKG_zVvGUISN06DvsP4EYSJF9VjWbtoBaqMEaz-kAVZ4lRsGI_EvcUUmbf37FMe_57d1S1VBSzaPOobOHrQ3JQw58NT1yrT26gVMhrCIa2cnv68OKTyERRskLoDs4BvoqnSxUM6hgY52C"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0F172A]"
              />
            </div>
            <span className="text-white text-sm font-semibold dark:font-medium dark:text-slate-300">
              Alătură-te celor 5.000+ elevi activi
            </span>
          </div>
        </div>
      </div>

      {/* Form Section (Right) */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-24 bg-white dark:bg-[#0F172A]">
        <LoginForm />
      </div>
    </div>
  );
}
