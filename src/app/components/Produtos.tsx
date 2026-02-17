import { formatPrice } from '../utils/formatting';

interface ProductSectionProps {
  description: string;
  price: number;
  originalPrice?: number;
  benefits: string[];
  ctaText: string;
  onCTA: () => void;
}

export function Produtos({
  description,
  price,
  originalPrice,
  benefits,
  ctaText,
  onCTA,
}: ProductSectionProps) {
  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <section className="py-10 bg-[#e9e7e3] flex justify-center px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-6 sm:p-7 text-center">
        
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-5">
          {originalPrice && originalPrice > price && (
            <div className="mb-2">
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(originalPrice)}
              </span>

              {discount && (
                <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                  {discount}% OFF
                </span>
              )}
            </div>
          )}

          <p className="text-3xl sm:text-4xl font-bold text-gray-900">
            {formatPrice(price)}
          </p>

          <p className="text-xs text-gray-500">
            À vista no boleto ou PIX
          </p>
        </div>

        <div className="border-t border-gray-200 my-5"></div>

        <ul className="text-left space-y-2 text-gray-700 text-xs sm:text-sm">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✔</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onCTA}
          className="mt-6 w-full bg-[#005CE6] hover:bg-[#287bf7] transition-colors text-white text-sm sm:text-base font-ligth py-2.5 rounded-full active:scale-95 !cursor-pointer"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
}
