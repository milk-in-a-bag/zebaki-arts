const thumbnails = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUQuWCDLLsDSNiBcQ2IMQsMdL1HJpd9lO8uOkMAoXwSdfureiM2rbxabEKonbXf5t1eHCs8dUp6VnnsbqXeObN6ROCojvPPYSA9ztq447yw7Xq2jtIpr2d7Ig9FJgw5t5R30GqyU5EOzNhhmCN4IocWoOxId8X8UmCupBmgufGjq84Qu0fcQpZLIKXwIDRUkLpidR9ULyuV6hYiWF9FcnJo8tOleEu8HcWkGxQd7pFrOrAnEuB2n3igoGKm_c61neD0NPPy1zTCj66",
    alt: "Detailed view of canvas texture",
    active: true,
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANUj6-aeWfUWm8HTmVg79in3xKFWOJxSejnHWEhmTlA006PAQjpklPoeSlHAg6YRkhBirYxMUFTvtnGVN5Yivvu_tTzZOq3Pg_p2IIGj4pfxmjFuXY7bZQxthN8AjYQ9FOsUOpPCX0zawvwZhnh82R0N9iZ93ObqJS0phHfR31vd4eI6xhdMPcxHqKqYxgAYNxqnAncNojRM_e8X2xf9JOb7BXnj-7lo4FeyyXs1E7RAHp1pTQONJZJI_LXKdoT1-LGCkkD5IVSbVW",
    alt: "Alternative angle of the artwork",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR5djXp_2KyfWsljASaWyItbd1guPlPx7oRT_2BbPyNwI71lDxFsVWB-SMA7BaaS1VlL8wVWEi2o42SKU61nT4aFjgIi_v_gbxSiZfSBEmTxeq5OY9n7kKOPFR1Ie10vxDcpEQ0v-haSX7i6RA9Sft8OrwX6Pp5qcZUWtTF4oDjnRv_a5QTlu70IxmWpp6b6Hcf4d65briLwXoeZjUkDfZyy56qZxH95GPLp0SuXDpxwu7MnZbE7FLrSmfR8lXStkR9oIPULgXoRez",
    alt: "Side profile of the painting frame",
  },
  {
    id: 4,
    isVideo: true,
  },
];

export default function MediaGallery() {
  return (
    <div className="lg:col-span-7 space-y-6">
      <div className="relative group overflow-hidden rounded-xl bg-white dark:bg-neutral-900 border border-primary/5 shadow-2xl">
        <div className="aspect-4/5 w-full zoom-container overflow-hidden cursor-zoom-in">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            data-alt="Abstract oil painting with vibrant pinks and deep blues"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdEdzA6XePcWCzfvnyW3tMZNFolBkoFDYxqU-eNwzHxaJuZ1-ig7vuYRc4MSC8l3hnFoEslIcLq_n8EjgWY_GuFaig6JXlLN5YqckP8cRCIbh_yovaG0DEEIodmDZhNzP6nO8VMYaMoViW0-QJKngHlRrmKp_vjr-PAHQqZ1SOJ7JqKVi8cKW7BSHgRJAW7bP6ThdkA5qTaSxQfwhHRrin_V7_W7pCMbWidwkuKPWXhM9CmfP6QQN8jl-RzE20bOOAtip9j6tjxr8N"
            alt="Ethereal Horizons"
          />
        </div>
        <button className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">fullscreen</span>
        </button>
      </div>
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {thumbnails.map((thumb) =>
          thumb.isVideo ? (
            <button
              key={thumb.id}
              className="aspect-square rounded-lg border-2 border-transparent hover:border-primary/30 bg-primary/10 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-primary">
                play_circle
              </span>
            </button>
          ) : (
            <button
              key={thumb.id}
              className={`aspect-square rounded-lg border-2 ${
                thumb.active
                  ? "border-primary"
                  : "border-transparent hover:border-primary/30"
              } overflow-hidden transition-colors`}
            >
              <img
                className="w-full h-full object-cover"
                data-alt={thumb.alt}
                src={thumb.src}
                alt={thumb.alt}
              />
            </button>
          ),
        )}
      </div>
    </div>
  );
}
