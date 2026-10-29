import { useEffect, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';

export default function Redirect({ to }) {
  const navigate = useNavigate();
  const redirectedRef = useRef(false);

  useEffect(() => {
    if (!redirectedRef.current) {
      redirectedRef.current = true;
      navigate({ to, replace: true });
    }
  }, [to, navigate]);

  return null;
}
